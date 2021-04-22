import React, { useState } from 'react';
import BlogItem from "./BlogItem/BlogItem";
import s from "./Blog.module.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';



const Blog = (props) => {
   

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    let state = props.BlogPost
    let ElementBlog = state.posts.map(b => <BlogItem title={b.title} content={b.content} key={b.id} />)
    let newPostTitle = state.newPostTitle;
    let newPostContent = state.newPostContent;
    // let newPostText = state.newPostText;
    //let newContentText = state.newContentText;

    let addPost = () => {
        props.sendPost();
    }

    // let changePostText = (e) => {
    //     debugger;
    //     let text = e.target.value;
    //     let textPostContent = e.target.value;
    //     props.updateNewPostBody(text, textPostContent)
    // }
    
   
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };
    return (
        <div className={s.test}>
            <Button type='submit' variant="dark" onClick={handleShow}> Додати </Button>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Новий пост</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} >
                        <Form.Group controlId="validationCustom01">
                            <Form.Label>Заголовок</Form.Label>
                            <Form.Control
                                placeholder="Title"
                                label="Surname"
                                type="text"
                                name='title'
                                id='title'
                                required
                                value={newPostTitle}
                                 />
                        </Form.Group>
                        <Form.Group controlId="formGridEmail">
                            <Form.Label>Mail</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                name="mail"
                                id="mail"
                                required
                                />
                        </Form.Group>
                        <Form.Group controlId="validationCustom03">
                            <Form.Label>Контент</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                label="Контент"
                                name="content"
                                id="content"
                                type="text"
                                cols="30"
                                required
                                value={newPostContent}
                                />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Закрити</Button>
                    <Button type="submit" variant="primary" onClick={addPost}>Зберегти</Button>
                </Modal.Footer>
            </Modal>
            <div className={s.block_title}>
                {ElementBlog}
            </div>
        </div>
    )
}
export default Blog;