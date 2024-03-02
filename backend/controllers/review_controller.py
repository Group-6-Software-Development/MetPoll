import uuid

from flask import request
from sqlalchemy.exc import IntegrityError

from models.review_model import create, find_all_reviews_by_course_id


def create_review():
    data = request.get_json()
    if not data or 'course_id' not in data or 'rating' not in data:
        return {'error': 'Bad Request'}, 400
    else:
        course_id = uuid.UUID(data['course_id'])
        rating = data['rating']
        comment = data.get('comment', None)
        try:
            review = create(course_id, rating, comment)
            return review, 201
        except IntegrityError as e:
            print(f"Unexpected error during review creation: {str(e)}")
            return {'error': 'Conflict - Review already exists'}, 409
        except Exception as e:
            print(f"Unexpected error during review creation: {str(e)}")
            return {'error': 'Internal Server Error'}, 500


def get_reviews(course_id):
    course_id = uuid.UUID(course_id)
    if not course_id:
        return {'error': 'Bad Request'}, 400
    else:
        try:
            reviews = find_all_reviews_by_course_id(course_id)
            return reviews, 200
        except Exception as e:
            print(f"Unexpected error during review lookup: {str(e)}")
            return {'error': 'Internal Server Error'}, 500
