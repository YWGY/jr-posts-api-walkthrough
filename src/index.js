const express = require('express');
const app = express();

app.use(express.json());
const posts = [];
let currentID=1;

app.get('/posts/:id',(req,res)=>{
    res.json(posts);
});

app.post('/posts/:id',(req,res)=>{
    const {id}= req.params;
    const post = posts.find(i=>i.id ===Number(id));
    if (!post)
    {
        return res.sendStatus(404);

    } 
    post.author=author;
    post.content=content;
    res.json(post);
    
});

app.delete('/posts/:id', (req, res)=>{
    const {id}=req.params;
    const {author, content}=req.body;
    const newPost = {author, content, id:currentID++};
    posts.delete(newPost);
    res.sendStatus(200).json(newPost);
}
)

app.post('/posts/:id', (req, res)=>{
    const {author, content} = req.body;
    const newPost = {author, content, id:currentID++}
    posts.push(newPost);
    res.sendStatus(201).json(newPost);
});



app.listen(3000, () =>{
    console.log('server listen on post 3000');
});