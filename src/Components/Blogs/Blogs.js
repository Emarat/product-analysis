import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <h2>Q&A</h2>
            <div className='Q1'>
                <h3> 1. What is Context API?</h3>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='Q1'>
                <h3> 2. What is Semantic tag?</h3>
                <p>Semantic tags are those that clearly describe their meaning in a human- and machine-readable way.Tags such as header, footer and article are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.</p>
            </div>
            <div className='Q1'>
                <h3> 3. Inline vs Inline-Block</h3>
                <div>
                    <li>Compared to display: inline, the major difference is that display: inline-block allows to set a width and height on the element.</li>
                    <li>Also, with display: inline-block, the top and bottom margins/paddings are respected, but with display: inline they are not.</li>
                    <li>Compared to display: block, the major difference is that display: inline-block does not add a line-break after the element, so the element can sit next to other elements.</li>
                </div>
            </div>
        </div>
    );
};

export default Blogs;