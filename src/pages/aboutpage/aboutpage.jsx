import React from 'react';
import { Helmet } from 'react-helmet';
import './aboutpage.scss';
const Aboutpage = () => {
  return (
    <div className="aboutpage">
      <Helmet>
        <title>Daring Ravenx &mdash; About</title>
        <meta property="og:title" content="Daring Ravenx &mdash; About" />
        <meta property="og:type" content="website" />
        <meta name="description" content="" />
        <meta property="og:site_name" content="Daring Ravenx" />
        <meta property="og:url" content="https://www.jimohblogs.com.ng/about" />
      </Helmet>
      <div className="about">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vitae
          magni consectetur accusantium ut? Quasi cumque facere placeat qui
          asperiores!
          <br />
          <br />
          Sapiente iure rem dolor blanditiis deserunt vitae aut eaque amet eius
          veritatis aperiam quidem alias? Voluptatum accusantium iure laborum
          officia soluta, numquam repellat.
          <br />
          <br />
          Reprehenderit nam error nisi accusamus facilis nobis tempore delectus?
          Error est ipsam sit maiores, vero dolore, unde tempora blanditiis
          omnis aut, doloremque dolores? Autem voluptates earum ea dolore nulla.
          Soluta a nesciunt minus, ducimus iure laudantium?
        </p>
      </div>
    </div>
  );
};

export default Aboutpage;
