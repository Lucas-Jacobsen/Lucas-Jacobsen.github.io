
import React from 'react';
import './blog.css'; // Import the Blog component styles

const Blog: React.FC = () => {
  return (
    <div className="blog-section">
      <h2 className="blog-title">On my mind</h2>
      <div className="blog-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel eros eget neque fringilla laoreet.</p>
        <p>Phasellus auctor justo vel mauris sodales, in dignissim metus auctor. Integer ultrices quam et ligula feugiat auctor.</p>
        <p>Nullam lobortis lectus eu risus eleifend, vel interdum nisl consectetur.</p>
        <p>Proin eu magna vel purus fermentum dictum.</p>
        <p>Quisque sit amet enim ut lorem pharetra iaculis. Sed nec nisl ac nunc ultrices rhoncus sit amet et ipsum.</p>
        <p>Donec consectetur odio eget eros efficitur, at tempus felis tincidunt.</p>
        <p>Nulla nec ligula a odio vehicula scelerisque ac id arcu.</p>
      </div>
    </div>
  );
}

export default Blog;
