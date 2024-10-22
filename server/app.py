from flask import Flask, jsonify, request
from flask_migrate import Migrate
from models import *
from flask_jwt_extended import *
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///hotel.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'

db.init_app(app)
CORS(app)
migrate = Migrate(app, db)
jwt = JWTManager(app)
blocklist = set()

@app.route('/')
def index():
    return "Vista Hotel Database"

# ------------------- Auth Routes -------------------
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    if not data or not all(key in data for key in ['username', 'password']):
        return jsonify({"error": "Missing username or password"}), 400

    user = User.query.filter_by(username=data['username']).first()
    
    if not user or not user.check_password(data['password']):
        return jsonify({"error": "Invalid credentials"}), 401

    # Create JWT token
    access_token = create_access_token(identity=user.id)
    return jsonify(access_token=access_token), 200

@app.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    jti = get_jwt()["jti"]
    
    blocklist.add(jti)
    return jsonify({"message": "Successfully logged out"}), 200

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    if not data or not all(key in data for key in ['username', 'email', 'password', 'first_name', 'last_name']):
        return jsonify({"error": "Missing required fields"}), 400

    existing_user = User.query.filter_by(username=data['username']).first()
    if existing_user:
        return jsonify({"error": "User already exists"}), 409

    try:
        new_user = User(
            username=data.get('username'),
            email=data.get('email'),
            first_name=data.get('first_name'),
            last_name=data.get('last_name')
        )
        new_user.set_password(data.get('password'))
        db.session.add(new_user)
        db.session.commit()

        # Create JWT token
        access_token = create_access_token(identity=new_user.id)
        return jsonify(access_token=access_token), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

# ------------------- Profile Routes -------------------
@app.route('/profile', methods=['GET'])
@jwt_required()
def profile():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    if user:
        return jsonify(user.to_dict()), 200
    return jsonify({"error": "User not found"}), 404

@app.route('/users', methods=['GET', 'POST'])
@jwt_required()  
def handle_users():
    if request.method == 'GET':
        users = User.query.all()
        return jsonify([user.to_dict() for user in users]), 200

    if request.method == 'POST':
        data = request.json
        if not data or not all(key in data for key in ['username', 'email', 'password', 'first_name', 'last_name']):
            return jsonify({"error": "Missing required fields"}), 400

        try:
            new_user = User(
                username=data.get('username'),
                email=data.get('email'),
                first_name=data.get('first_name'),
                last_name=data.get('last_name')
            )
            new_user.set_password(data['password'])
            db.session.add(new_user)
            db.session.commit()
            return jsonify(new_user.to_dict()), 201
        except Exception as e:
            db.session.rollback()
            return jsonify({"error": str(e)}), 500

@app.route('/users/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
@jwt_required()
def handle_user(id):
    user = User.query.get(id)
    
    if not user:
        return jsonify({"error": "User not found"}), 404
    
    if request.method == 'GET':
        return jsonify(user.to_dict()), 200

    if request.method == 'PATCH':
        data = request.json
        if 'username' in data:
            user.username = data['username']
        if 'email' in data:
            user.email = data['email']
        if 'password' in data:
            user.set_password(data['password'])
        if 'first_name' in data:
            user.first_name = data['first_name']
        if 'last_name' in data:
            user.last_name = data['last_name']

        try:
            db.session.commit()
            return jsonify(user.to_dict()), 200
        except Exception as e:
            db.session.rollback()
            return jsonify({"error": str(e)}), 500

    if request.method == 'DELETE':
        try:
            db.session.delete(user)
            db.session.commit()
            return jsonify({"message": "User deleted successfully"}), 200
        except Exception as e:
            db.session.rollback()
            return jsonify({"error": str(e)}), 500

# ------------------- Hotel Routes -------------------
@app.route('/hotels', methods=['GET'])
def get_hotels():
    hotels = Hotel.query.all()
    return jsonify([hotel.to_dict() for hotel in hotels]), 200

@app.route('/hotels/<int:id>', methods=['GET'])
def get_hotel(id):
    hotel = Hotel.query.get(id)
    if hotel:
        return jsonify(hotel.to_dict()), 200
    return jsonify({"error": "Hotel not found"}), 404

# ------------------- Room Routes -------------------
@app.route('/rooms', methods=['GET'])
def get_rooms():
    rooms = Room.query.all()
    return jsonify([room.to_dict() for room in rooms]), 200

@app.route('/rooms/<int:id>', methods=['GET'])
def get_room(id):
    room = Room.query.get(id)
    if room:
        return jsonify(room.to_dict()), 200
    return jsonify({"error": "Room not found"}), 404


# ------------------- Review Routes -------------------
@app.route('/reviews', methods=['GET'])
def get_reviews():
    reviews = Review.query.all()
    return jsonify([review.to_dict() for review in reviews]), 200

@app.route('/reviews/<int:id>', methods=['GET'])
def get_review(id):
    review = Review.query.get(id)
    if review:
        return jsonify(review.to_dict()), 200
    return jsonify({"error": "Review not found"}), 404

@app.route('/reviews', methods=['POST'])
@jwt_required()
def create_review():
    data = request.json
    new_review = Review(
        user_id=data.get('user_id'),
        hotel_id=data.get('hotel_id'),
        rating=data.get('rating'),
        comment=data.get('comment')
    )
    db.session.add(new_review)
    db.session.commit()
    return jsonify(new_review.to_dict()), 201

@app.route('/reviews/<int:id>', methods=['PATCH'])
@jwt_required()
def update_review(id):
    review = Review.query.get(id)
    if not review:
        return jsonify({"error": "Review not found"}), 404

    data = request.json
    if 'rating' in data:
        review.rating = data['rating']
    if 'comment' in data:
        review.comment = data['comment']

    try:
        db.session.commit()
        return jsonify(review.to_dict()), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


@app.route('/reviews/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_review(id):
    review = Review.query.get(id)
    if not review:
        return jsonify({"error": "Review not found"}), 404

    try:
        db.session.delete(review)
        db.session.commit()
        return jsonify({"message": "Review deleted successfully"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

# ------------------- Booking Routes -------------------
@app.route('/bookings', methods=['GET'])
@jwt_required()
def get_bookings():
    bookings = Booking.query.all()
    return jsonify([booking.to_dict() for booking in bookings]), 200

@app.route('/bookings/<int:id>', methods=['GET'])
def get_booking(id):
    booking = Booking.query.get(id)
    if booking:
        return jsonify(booking.to_dict()), 200
    return jsonify({"error": "Booking not found"}), 404

@app.route('/bookings', methods=['POST'])
@jwt_required()
def create_booking():
    data = request.json
    new_booking = Booking(
        user_id=data.get('user_id'),
        room_id=data.get('room_id'),
        start_date=data.get('start_date'),
        end_date=data.get('end_date'),
        total_cost=data.get('total_cost')
    )
    db.session.add(new_booking)
    db.session.commit()
    return jsonify(new_booking.to_dict()), 201

@app.route('/bookings/<int:id>', methods=['PATCH'])
def update_booking(id):
    booking = Booking.query.get(id)
    if not booking:
        return jsonify({"error": "Booking not found"}), 404

    data = request.json
    if 'start_date' in data:
        booking.start_date = data['start_date']
    if 'end_date' in data:
        booking.end_date = data['end_date']
    if 'total_cost' in data:
        booking.total_cost = data['total_cost']

    try:
        db.session.commit()
        return jsonify(booking.to_dict()), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

@app.route('/bookings/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_booking(id):
    booking = Booking.query.get(id)
    if not booking:
        return jsonify({"error": "Booking not found"}), 404

    try:
        db.session.delete(booking)
        db.session.commit()
        return jsonify({"message": "Booking deleted successfully"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

# ------------------- Tag Routes -------------------
@app.route('/tags', methods=['GET'])
def get_tags():
    tags = Tag.query.all()
    return jsonify([tag.to_dict() for tag in tags]), 200

@app.route('/tags/<int:id>', methods=['GET'])
def get_tag(id):
    tag = Tag.query.get(id)
    if tag:
        return jsonify(tag.to_dict()), 200
    return jsonify({"error": "Tag not found"}), 404

@app.route('/tags', methods=['POST'])
def create_tag():
    data = request.json
    new_tag = Tag(name=data.get('name'))
    db.session.add(new_tag)
    db.session.commit()
    return jsonify(new_tag.to_dict()), 201


if __name__ == '__main__':
    app.run(port=8040, debug=True)