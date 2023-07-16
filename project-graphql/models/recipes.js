const mongoose = require('mongoose');
const Schema = mongoose.Schema;
   
   const recipeSchema = new Schema(
        {
            "imgUrl": {
                "type": "String"
            },
            "name": {
                "type": "String"
            },
            "rating": {
                "type": "String"
            },
            "description": {
                "type": "String"
            },
            "author": {
                "name": {
                    "type": "String"
                },
                "url": {
                    "type": "String"
                }
            },
            "cookTime": {
                "type": "String"
            },
            "ingredients": {
                "type": [
                    "String"
                ]
            },
            "instructions": {
                "type": [
                    "String"
                ]
            },
            "equipment": {
                "type": [
                    "String"
                ]
            },
            "nutrition": {
                "protein": {
                    "type": "String"
                },
                "fiber": {
                    "type": "String"
                },
                "calories": {
                    "type": "String"
                },
                "fat": {
                    "type": "String"
                },
                "carbohydrates": {
                    "type": "String"
                },
                "sodium": {
                    "type": "String"
                }
            }
        });
  
    module.exports = mongoose.model('Recipes', recipeSchema);
 