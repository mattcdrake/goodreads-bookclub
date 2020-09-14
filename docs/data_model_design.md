# Data Model Designs

What are the things that we need to keep track of?

- Users
- Books
- Book Recommendations
- Clubs

## User

### Data Models

- ID (one integer, unique)
- Name (one string)
- AvatarURL (one string)
- ToReadBooks (many Books)
- Clubs (many Clubs)

### API

GET /user/{id}/clubs
GET /user/{id}/books

## Club

### Data Models

- ID (one integer, unique)
- Title (one string)
- Organizer (one User)
- Members (many Users)
- BookRecommendations (many BookRecommendations)

### API

GET /clubs/{id}/organizer
GET /clubs/{id}/members
GET /clubs/{id}/recommendations

## Book

### Data Models

- ISBN13 (one integer, unique)
- Title (string)
- Author (string)

### API

GET /books/{isbn13}

### Recommendation

### Data Models

- ClubID (one integer)
- BookID (one integer)
- CommonUsers (many Users)

## API

GET /recommendations/{clubID}
GET /recommendations/{clubID}/{bookID}
