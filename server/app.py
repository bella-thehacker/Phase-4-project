from flask import Flask, jsonify, request
from flask_migrate import Migrate
from models import *

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///hotel.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
migrate = Migrate(app, db)

@app.route('/')
def index():
    return "Vista Hotel Database"

# ------------------- User Routes -------------------

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([user.to_dict() for user in users]), 200

@app.route('/users/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.get(id)
    if user:
        return jsonify(user.to_dict()), 200
    return jsonify({"error": "User not found"}), 404

@app.route('/users', methods=['POST'])
def create_user():
    data = request.json
    if not data or not all(key in data for key in ['username', 'email', 'password_hash', 'first_name', 'last_name']):
        return jsonify({"error": "Missing required fields"}), 400

    try:
        new_user = User(
            username=data.get('username'),
            email=data.get('email'),
            password_hash=data.get('password_hash'),
            first_name=data.get('first_name'),
            last_name=data.get('last_name')
        )
        db.session.add(new_user)
        db.session.commit()
        return jsonify(new_user.to_dict()), 201
    except Exception as e:
        db.session.rollback()  # Rollback in case of error
        return jsonify({"error": str(e)}), 500
    
@app.route('/users/<int:id>', methods=['PATCH'])
def update_user(id):
    user = User.query.get(id)
    if not user:
        return jsonify({"error": "User not found"}), 404

    data = request.json
    if 'username' in data:
        user.username = data['username']
    if 'email' in data:
        user.email = data['email']
    if 'password_hash' in data:
        user.password_hash = data['password_hash']
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


@app.route('/users/<int:id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get(id)
    if not user:
        return jsonify({"error": "User not found"}), 404

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