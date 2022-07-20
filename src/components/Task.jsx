import React from "react";
import '../stylesheets/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Task = ({ text }) => {
  return (
    <section className='task-container'>
      <div className='task-text'>{text}</div>
      <div className='task-icon-container'>
        <AiOutlineCloseCircle className='task-icon' />
      </div>
    </section>
  );
} 

export default Task;