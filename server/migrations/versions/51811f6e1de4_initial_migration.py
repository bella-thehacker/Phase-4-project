"""Initial migration.

Revision ID: 51811f6e1de4
Revises: 
Create Date: 2024-10-18 17:03:44.742320

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '51811f6e1de4'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('hotels',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('location', sa.String(length=100), nullable=False),
    sa.Column('description', sa.Text(), nullable=True),
    sa.Column('star_rating', sa.Integer(), nullable=True),
    sa.Column('amenities', sa.String(length=250), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('tags',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=50), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password_hash', sa.String(length=128), nullable=False),
    sa.Column('first_name', sa.String(length=50), nullable=False),
    sa.Column('last_name', sa.String(length=50), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('hotel_tag',
    sa.Column('hotel_id', sa.Integer(), nullable=False),
    sa.Column('tag_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['hotel_id'], ['hotels.id'], name=op.f('fk_hotel_tag_hotel_id_hotels')),
    sa.ForeignKeyConstraint(['tag_id'], ['tags.id'], name=op.f('fk_hotel_tag_tag_id_tags')),
    sa.PrimaryKeyConstraint('hotel_id', 'tag_id')
    )
    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('hotel_id', sa.Integer(), nullable=False),
    sa.Column('rating', sa.Integer(), nullable=False),
    sa.Column('comment', sa.Text(), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['hotel_id'], ['hotels.id'], name=op.f('fk_reviews_hotel_id_hotels')),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_reviews_user_id_users')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('rooms',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('hotel_id', sa.Integer(), nullable=False),
    sa.Column('room_type', sa.String(length=50), nullable=False),
    sa.Column('price_per_night', sa.Float(), nullable=False),
    sa.Column('bed_count', sa.Integer(), nullable=False),
    sa.Column('max_occupancy', sa.Integer(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['hotel_id'], ['hotels.id'], name=op.f('fk_rooms_hotel_id_hotels')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user_tag',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('tag_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['tag_id'], ['tags.id'], name=op.f('fk_user_tag_tag_id_tags')),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_user_tag_user_id_users')),
    sa.PrimaryKeyConstraint('user_id', 'tag_id')
    )
    op.create_table('bookings',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('room_id', sa.Integer(), nullable=False),
    sa.Column('start_date', sa.Date(), nullable=False),
    sa.Column('end_date', sa.Date(), nullable=False),
    sa.Column('total_cost', sa.Float(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['room_id'], ['rooms.id'], name=op.f('fk_bookings_room_id_rooms')),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_bookings_user_id_users')),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('bookings')
    op.drop_table('user_tag')
    op.drop_table('rooms')
    op.drop_table('reviews')
    op.drop_table('hotel_tag')
    op.drop_table('users')
    op.drop_table('tags')
    op.drop_table('hotels')
    # ### end Alembic commands ###