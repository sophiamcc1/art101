// Snake
// Sophia McClanahan
// 4/21/2025


// Upon set up create game_area 
// Upon set up place snake at a coordinate within the game_area (x,y)
// Set initial_direction for snake to right 
// Place food randomly on the grid

// Make a function for game_over and set it to false

// When game_over = false
// Detect user input for direction (up,down,left,right arrow keys)
  // this ensure that the user cannot trigger game_over by going into themselves
	// If input_direction is u,d,l,r and is not opposite of the current_direction 
	// Then set current_direction = input_direction 

 // Make new_head_position function and base it off current_direction 

	// Create collision detection
		// If new_head_position is outside game_area or new_head_position is in snake
			// et game_over to true 

	// this simulates the illusion of movement 
// if new_head_position = food_position 
	// Add a new_head_position to the beginning of the snake and place new 
    // food randomly on the grid (where there is no snake)
    // else remove the last part of the snake tail

// If all food collected and no more space in game_area 
// set game_over to true and display “You Win!”
// Else game_over = false
