### 1. **User Table**
Represents users of the system.

| Column         | Type      | Constraints         |
|----------------|-----------|---------------------|
| **Id**         | Integer   | Primary key          |
| **Username**   | String    | Unique, not nullable |
| **Email**      | String    | Unique, not nullable |
| **Password_hash** | String | Not nullable         |
| **First_name** | String    | Not nullable         |
| **Last_name**  | String    | Not nullable         |
| **Created_at** | DateTime  | Default: current timestamp |

### 2. **Hotel Table**
Represents hotels in the system.

| Column         | Type      | Constraints          |
|----------------|-----------|----------------------|
| **Id**         | Integer   | Primary key           |
| **Name**       | String    | Not nullable          |
| **Location**   | String    | Not nullable          |
| **Description**| Text      | Nullable              |
| **Star_rating**| Integer   | Nullable (1 to 5)     |
| **Amenities**  | String    | Nullable (comma-separated) |
| **Created_at** | DateTime  | Default: current timestamp |

### 3. **Room Table**
Represents rooms within hotels.

| Column          | Type      | Constraints          |
|-----------------|-----------|----------------------|
| **Id**          | Integer   | Primary key           |
| **Hotel_id**    | Integer   | Foreign key, not nullable (references Hotel.Id) |
| **Room_type**   | String    | Not nullable          |
| **Price_per_night** | Float | Not nullable          |
| **Bed_count**   | Integer   | Not nullable          |
| **Max_occupancy**| Integer  | Not nullable          |
| **Created_at**  | DateTime  | Default: current timestamp |

### 4. **Review Table**
Represents user reviews for hotels.

| Column         | Type      | Constraints          |
|----------------|-----------|----------------------|
| **Id**         | Integer   | Primary key           |
| **User_id**    | Integer   | Foreign key, not nullable (references User.Id) |
| **Hotel_id**   | Integer   | Foreign key, not nullable (references Hotel.Id) |
| **Rating**     | Integer   | Not nullable (1 to 5) |
| **Comment**    | Text      | Nullable              |
| **Created_at** | DateTime  | Default: current timestamp |

### 5. **Booking Table**
Represents room bookings by users.

| Column         | Type      | Constraints          |
|----------------|-----------|----------------------|
| **Id**         | Integer   | Primary key           |
| **User_id**    | Integer   | Foreign key, not nullable (references User.Id) |
| **Room_id**    | Integer   | Foreign key, not nullable (references Room.Id) |
| **Start_date** | Date      | Not nullable          |
| **End_date**   | Date      | Not nullable          |
| **Total_cost** | Float     | Not nullable          |
| **Created_at** | DateTime  | Default: current timestamp |

### 6. **UserFavoritesHotel Table** (New: Many-to-Many Relationship)
Represents the many-to-many relationship between **Users** and **Hotels**, allowing users to favorite hotels.

| Column         | Type      | Constraints          |
|----------------|-----------|----------------------|
| **Id**         | Integer   | Primary key           |
| **User_id**    | Integer   | Foreign key, not nullable (references User.Id) |
| **Hotel_id**   | Integer   | Foreign key, not nullable (references Hotel.Id) |
| **Created_at** | DateTime  | Default: current timestamp |

---

### Summary of Relationships:
- **One-to-Many**:
  - A **User** can write many **Reviews**.
  - A **Hotel** can have many **Reviews**.
  - A **Hotel** can have many **Rooms**.
  - A **User** can make many **Bookings**.
  - A **Room** can have many **Bookings**.

- **Many-to-Many**:
  - **Users** can favorite **many Hotels**.
  - **Hotels** can be favorited by **many Users**.