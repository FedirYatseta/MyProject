import React, { useState } from 'react';
import BlogItem from "./BlogItem/BlogItem";
import s from "./Blog.module.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';



const Blog = (props) => {
    const [modalPost, setModalAuthor] = useState({
        title: '',
        content: '',
        postDate: ''
    });

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    let state = props.BlogPost
    let ElementBlog = state.posts.map(b => <BlogItem title={b.title} content={b.content} key={b.id} />)
    // let newPostText = state.newPostText;
    //let newContentText = state.newContentText;



    let addPost = () => {
        props.sendPost(modalPost);
    }

    // let changePostText = (e) => {
    //     debugger;
    //     let text = e.target.value;
    //     let textPostContent = e.target.value;
    //     props.updateNewPostBody(text, textPostContent)
    // }

    const inputGroupChangeHandler = (event) => {

        setModalAuthor((useState) => (
            {
                ...useState,
                [event.target.id]: event.target.value
            }));
    }
    return (
        <div className={s.test}>
            <div className={s.btn}>
                <Button type='submit' variant="secondary" onClick={handleShow}> Додати </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Новий пост</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Заголовок</Form.Label>
                            <Form.Control 
                                placeholder="Title"
                                label="Surname"
                                type="text"
                                name='title'
                                id='title'
                                value={!modalPost ? '' : modalPost.title}
                                onChange={event => inputGroupChangeHandler(event)} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Mail</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Контент</Form.Label>
                            <Form.Control as="textarea" rows={3} label="Контент"
                                name="content"
                                id="content"
                                type="text"
                                cols="30"
                                value={!modalPost ? '' : modalPost.content}
                                onChange={event => inputGroupChangeHandler(event)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Закрити</Button>
                    <Button variant="primary" onClick={handleClose}>Зберегти</Button>
                </Modal.Footer>
            </Modal>
            <div className={s.block_title}>
                {ElementBlog}
            </div>
        </div>
    )
}
export default Blog;