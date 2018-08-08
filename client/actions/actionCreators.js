//Increment
export function increment(index) {
	return{
		type:'INCREMENT_LIKES',
		index
	}
}

//add Comments
export function addComment(postId, author, comment){
	console.log("dispatch add comment")
	return{
		type:'ADD_COMMENT',
		postId,
		author,
		comment
	}
}


//remove comments
export function removeComment(postId, i){
	return{
		type:'REMOVE_COMMENT',
		i,
		postId
	}
}
