const posts = [];
let currentId = 1;

function addPost(post){
    const newPost = {...post, id: currentId};
    posts.push(newPost);
    return newPost;
}

function getAllPost(){
    return JSON.parse(JSON.stringify(posts));

}

function getPostById(id){
    return posts.find(i=>i.id===id);
}

function updataPostById(id){
    const postIndex = getPostIndexById(id);
    const undatePost = (...newPost, id);
    posts()
}

