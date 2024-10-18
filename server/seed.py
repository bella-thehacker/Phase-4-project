from models import db, User, Hotel, Room, Review, Booking, Tag
from datetime import  date

def seed_data():
    # Drop and recreate the tables
    db.drop_all()
    db.create_all()

    # ------------------- Users -------------------
    user1 = User(
        username='john_doe',
        email='john@example.com',
        password_hash='password_1',
        first_name='John',
        last_name='Doe',
    )
    
    user2 = User(
        username='jane_smith',
        email='jane@example.com',
        password_hash='hashed_password_2',
        first_name='Jane',
        last_name='Smith',
    )

    # ------------------- Hotels -------------------
    hotel1 = Hotel(
        name='Vista Paradise',
        location='New York',
        description='A luxury hotel in downtown New York.',
        star_rating=5,
        amenities='Pool, Gym, Free WiFi, Spa',
    )

    hotel2 = Hotel(
        name='Ocean Breeze',
        location='Los Angeles',
        description='A beachfront hotel with stunning ocean views.',
        star_rating=4,
        amenities='Free WiFi, Beach Access, Gym, Pool',
    )

    # ------------------- Rooms -------------------
    room1 = Room(
        hotel_id=1,
        room_type='Deluxe Suite',
        price_per_night=350.00,
        bed_count=1,
        max_occupancy=2,
    )

    room2 = Room(
        hotel_id=1,
        room_type='Standard Room',
        price_per_night=150.00,
        bed_count=2,
        max_occupancy=4,
    )

    room3 = Room(
        hotel_id=2,
        room_type='Ocean View Room',
        price_per_night=400.00,
        bed_count=1,
        max_occupancy=2,
    )

    # ------------------- Reviews -------------------
    review1 = Review(
        user_id=1,
        hotel_id=1,
        rating=5,
        comment="Great service and luxurious experience!",
    )

    review2 = Review(
        user_id=2,
        hotel_id=2,
        rating=4,
        comment="Amazing view, but a bit pricey.",
    )

    # ------------------- Bookings -------------------
    booking1 = Booking(
        user_id=1,
        room_id=1,
        start_date=date(2024, 10, 20),
        end_date=date(2024, 10, 25),
        total_cost=1750.00,
    )

    booking2 = Booking(
        user_id=2,
        room_id=3,
        start_date=date(2024, 11, 1),
        end_date=date(2024, 11, 5),
        total_cost=1600.00,
    )

    # ------------------- Tags -------------------
    tag1 = Tag(
        name="Luxury"
    )

    tag2 = Tag(
        name="Beachfront"
    )

    tag3 = Tag(
        name="Business"
    )

    # ------------------- Assign Tags -------------------
    hotel1.tags.append(tag1)
    hotel2.tags.append(tag2)
    user1.tags.append(tag3)

    # ------------------- Add to Session -------------------
    db.session.add_all([user1, user2, hotel1, hotel2, room1, room2, room3, review1, review2, booking1, booking2, tag1, tag2, tag3])

    # Commit to the database
    db.session.commit()

if __name__ == '__main__':
    from app import app
    with app.app_context():
        seed_data()
    print("Database seeded!")
