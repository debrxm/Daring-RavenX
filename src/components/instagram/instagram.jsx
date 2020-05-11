import React, { useState, useEffect } from 'react';
import Carousel from 'nuka-carousel';
import rightArrow from '../../assets/rightArrow.svg';
import loader from '../../assets/loader.gif';
import './instagram.scss';
const InstagramPosts = () => {
  const [state, setState] = useState({ posts: [], windowWidth: 0 });
  useEffect(() => {
    fetch('https://www.instagram.com/daring_ravenx/?__a=1')
      .then((res) => res.json())
      .then((data) => {
        setState({
          posts: data.graphql.user.edge_owner_to_timeline_media.edges.filter(
            (item, index) => index < 10
          ),
        });
      });
    window.addEventListener('resize', () => {
      let windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
      setState({ windowWidth });
    });
  }, []);
  return (
    <div className="instagram-posts">
      <div className="shadow"></div>
      <Carousel
        renderCenterLeftControls={({ previousSlide }) =>
          state.windowWidth < 400 ? null : (
            <button className="ctrl-btn prev" onClick={previousSlide}>
              <img src={rightArrow} alt="" />
            </button>
          )
        }
        renderCenterRightControls={({ nextSlide }) =>
          state.windowWidth < 400 ? null : (
            <button className="ctrl-btn next" onClick={nextSlide}>
              <img src={rightArrow} alt="" />
            </button>
          )
        }
        slidesToShow={
          state.windowWidth < 400
            ? 2
            : state.windowWidth < 500
            ? 3
            : state.windowWidth < 700
            ? 4
            : 7
        }
      >
        {state.posts.length !== 0 ? (
          state.posts.map((item, index) => (
            <div key={index} className="post">
              <img
                src={item.node.thumbnail_src}
                height="180px"
                width="150px"
                alt="post"
              />
            </div>
          ))
        ) : (
          <div className="loader">
            <img src={loader} alt="loader" />
          </div>
        )}
      </Carousel>
    </div>
  );
};

export default InstagramPosts;
