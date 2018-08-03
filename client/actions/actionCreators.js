//Increment
function increment(index) {
	return{
		type:"INCREMENT_Likes",
		index
	}
}

//add Comments
function addComment(postId, author, comment){
	return{
		type:"ADD_COMMENT",
		postId,
		author,
		comment
	}
}


//remove comments

