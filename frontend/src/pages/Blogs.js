import React from 'react';

const Blogs = () => {
    return (
      <div className="page">
        <h1>Blogs</h1>
        <div className="blogPage remark">
          <p>
            Hey there! I've dropped some files and blogs on this {" "}
            <a
              className="link"
              href="https://wacky199.github.io/md-blog/"
              target="_blank"
              rel="noopener noreferrer"
            >
            site
            </a>
            {" "} but for now, it's just some classic Lorem Ipsum. This space is built with GatsbyJS, it's as static as it gets. Dive in and have a
            peek.
          </p>
          <h4 className="info">
            <a
              href="https://wacky199.github.io/md-blog/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Goto the Site
            </a>
          </h4>
        </div>
      </div>
    );
};

export default Blogs;
