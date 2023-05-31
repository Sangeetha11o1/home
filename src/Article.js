import React, { useEffect, useState } from 'react';
import './Article.css';

const Article = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="article">
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      <div className="banner">
        {/* Image will be added here */}
      </div>
      <div className="content">
        <h1>Author Talks: What is the Key to Unlocking Digital Transformation?</h1>
        <p className="date">Published on May 30, 2023</p>
        <blockquote>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius felis non ligula auctor ultricies.
          Phasellus aliquam faucibus felis, nec viverra nisl lobortis nec."
        </blockquote>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius felis non ligula auctor ultricies. Proin
          ullamcorper lectus sed nisi finibus, non facilisis nunc dapibus. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia Curae; Aenean blandit lobortis enim vel facilisis. Fusce dapibus aliquam
          velit nec dignissim. Sed ultrices mi mi, id commodo neque ullamcorper sed. Phasellus aliquam faucibus felis,
          nec viverra nisl lobortis nec. Curabitur eu faucibus ligula, non cursus leo. Nulla facilisi. Proin commodo
          dui in ligula tincidunt, et tempus est consequat.
        </p>
        <p>
          Donec et malesuada eros. Vestibulum non justo eu sapien cursus malesuada eu ut sapien. Nam in ipsum lacus.
          Curabitur ut leo ac ante porttitor rutrum nec id nisi. Fusce sit amet ipsum a ligula lobortis lacinia. Donec
          condimentum nisl id nibh pharetra gravida. Sed malesuada sapien in augue placerat, vel ultricies elit
          finibus. Nullam congue aliquet convallis. Suspendisse potenti. Morbi semper metus nec mauris consectetur
          tincidunt. Quisque pellentesque justo id diam fermentum, ut laoreet libero convallis. Curabitur sodales est a
          arcu suscipit, in aliquam dui aliquet. Nam dictum malesuada ultrices.
        </p>
        <p>
          Vivamus euismod euismod nibh, non volutpat odio. Praesent pulvinar elit in est lobortis auctor. Phasellus
          rutrum, tortor a cursus fermentum, mauris mauris lacinia orci, et volutpat nisi est a mi. Aliquam ut odio nec
          lectus varius malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Ut vestibulum fermentum diam, ut accumsan est bibendum eget. Mauris vestibulum arcu ut diam dictum
          dignissim. Duis faucibus erat sit amet risus posuere cursus. Phasellus sit amet risus non massa malesuada
          eleifend ac a nunc. Sed pellentesque, odio ut tristique pulvinar, dolor felis posuere urna, vel dapibus
          metus tellus ac nulla. Vestibulum vulputate dui nec justo volutpat, in sollicitudin elit accumsan. Morbi nec
          nibh nec lacus gravida congue.
        </p>
        <p>
          Integer blandit urna augue, ut tristique risus vestibulum at. Sed fringilla, ipsum nec ultrices feugiat, ex
          velit facilisis odio, eu placerat est tellus a purus. Sed vel est aliquam, congue metus id, ullamcorper justo.
          In vitae elit nunc. Nam ultrices tempor purus eget auctor. Nulla facilisi. Mauris at dolor semper, bibendum
          justo et, facilisis nunc. Nulla non ligula sit amet tellus pretium condimentum non in mi. Ut hendrerit elit
          tellus, et pellentesque neque vulputate in. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas.
        </p>
        <p>
          Vestibulum eget condimentum enim. Donec a malesuada felis. In faucibus leo sit amet augue luctus gravida. In
          fermentum mi ac mi pharetra consequat. In hac habitasse platea dictumst. Nullam vel cursus tortor, in
          consectetur quam. Phasellus mattis nunc ac lacinia ullamcorper. Vivamus eget pellentesque mauris. Proin et
          aliquet orci. Nulla id ipsum volutpat, pulvinar justo in, viverra dui. Sed non mi nec urna rutrum sagittis.
        </p>
        {/* Additional content goes here */}
      </div>
    </div>
  );
};

export default Article;

