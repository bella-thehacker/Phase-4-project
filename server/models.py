from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin # type: ignore
from datetime import datetime


metadata = MetaData(
    naming_convention={
        "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    }
)

db = SQLAlchemy(metadata=metadata)

# Association Table for Many-to-Many relationship between hotels and tags
hotel_tag = db.Table('hotel_tag',
    db.Column('hotel_id', db.Integer, db.ForeignKey('hotels.id'), primary_key=True),
    db.Column('tag_id', db.Integer, db.ForeignKey('tags.id'), primary_key=True),
)

# Association Table for Many-to-Many relationship between users and tags
user_tag = db.Table('user_tag',
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'), primary_key=True),
    db.Column('tag_id', db.Integer, db.ForeignKey('tags.id'), primary_key=True),
)

# User Model
class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    serialize_only = ('id', 'username', 'email', 'first_name', 'last_name')

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)

    reviews = db.relationship('Review', backref='user', lazy=True)
    bookings = db.relationship('Booking', backref='user', lazy=True)
    tags = db.relationship('Tag', secondary=user_tag, back_populates='users')

    # Validation for email
    @validates('email')
    def validate_email(self, key, value):
        if not isinstance(value, str) or "@" not in value:
            raise ValueError("Invalid email format.")
        return value


    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'reviews': [review.to_dict() for review in self.reviews],
            'bookings': [booking.to_dict() for booking in self.bookings],
            'tags': [tag.name for tag in self.tags],
        }

# Hotel Model
class Hotel(db.Model, SerializerMixin):
    __tablename__ = 'hotels'
    serialize_only = ('id', 'name', 'location', 'description', 'star_rating', 'amenities')

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    location = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=True)
    star_rating = db.Column(db.Integer, nullable=True)
    amenities = db.Column(db.String(250), nullable=True)

    rooms = db.relationship('Room', backref='hotel', lazy=True)
    reviews = db.relationship('Review', backref='hotel', lazy=True)
    tags = db.relationship('Tag', secondary=hotel_tag, back_populates='hotels')

    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'location': self.location,
            'description': self.description,
            'star_rating': self.star_rating,
            'amenities': self.amenities,
            'rooms': [room.to_dict() for room in self.rooms],
            'reviews': [review.to_dict() for review in self.reviews],
            'tags': [tag.name for tag in self.tags],
        }

# Room Model
class Room(db.Model, SerializerMixin):
    __tablename__ = 'rooms'
    serialize_only = ('id', 'hotel_id', 'room_type', 'price_per_night', 'bed_count', 'max_occupancy')

    id = db.Column(db.Integer, primary_key=True)
    hotel_id = db.Column(db.Integer, db.ForeignKey('hotels.id'), nullable=False)
    room_type = db.Column(db.String(50), nullable=False)
    price_per_night = db.Column(db.Float, nullable=False)
    bed_count = db.Column(db.Integer, nullable=False)
    max_occupancy = db.Column(db.Integer, nullable=False)

    
    def to_dict(self):
        return {
            'id': self.id,
            'hotel_id': self.hotel_id,
            'room_type': self.room_type,
            'price_per_night': self.price_per_night,
            'bed_count': self.bed_count,
            'max_occupancy': self.max_occupancy,
        }

# Review Model
class Review(db.Model, SerializerMixin):
    __tablename__ = 'reviews'
    serialize_only = ('id', 'user_id', 'hotel_id', 'rating', 'comment')

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    hotel_id = db.Column(db.Integer, db.ForeignKey('hotels.id'), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'hotel_id': self.hotel_id,
            'rating': self.rating,
            'comment': self.comment,
            'created_at': self.created_at.isoformat() if self.created_at else None,
        }

# Booking Model
class Booking(db.Model, SerializerMixin):
    __tablename__ = 'bookings'
    serialize_only = ('id', 'user_id', 'room_id', 'start_date', 'end_date', 'total_cost')

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    room_id = db.Column(db.Integer, db.ForeignKey('rooms.id'), nullable=False)
    start_date = db.Column(db.Date, nullable=False)
    end_date = db.Column(db.Date, nullable=False)
    total_cost = db.Column(db.Float, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    # Validation for booking dates
    @validates('end_date')
    def validate_dates(self, key, value):
        if key == 'end_date' and value < self.start_date:
            raise ValueError("End date must be after start date.")
        return value

    
    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'room_id': self.room_id,
            'start_date': self.start_date.isoformat() if self.start_date else None,
            'end_date': self.end_date.isoformat() if self.end_date else None,
            'total_cost': self.total_cost,
            'created_at': self.created_at.isoformat() if self.created_at else None,
        }

# Tag Model
class Tag(db.Model, SerializerMixin):
    __tablename__ = 'tags'
    serialize_only = ('id', 'name')

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)

    # Define the relationships using db.relationship()
    hotels = db.relationship('Hotel', secondary=hotel_tag, back_populates='tags')
    users = db.relationship('User', secondary=user_tag, back_populates='tags')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
        }

