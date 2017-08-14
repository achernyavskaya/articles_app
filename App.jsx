import React from 'react';
import ReactDOM from 'react-dom';
import Truncate from 'react-truncate-html';
import data from './articles.json';


class App extends React.Component {
    'use strict';

    createPreviewMarkup(content) {
        var preview = content.replace(/<img[^>]*>/, "");
        return {__html: preview};
    }

    createPreview(content) {
        return <Truncate
            lines={10}
            portrait={4}
            breakWord={true}
            responsive={false}
            dangerouslySetInnerHTML={this.createPreviewMarkup(content)}
        />
    }

    render() {
        let that = this;
        let url = "./" + data.post_name;
        let articleList = data.map(function(data){
            return (
                <div className="articlePreview">
                    <div className="headerImageContainer">
                        <img className="headerImage" src={data.header_image}/>
                    </div>
                    <div className="articleInfo">
                        <h1>{data.post_title}</h1>
                        <div className="publishDate">{data.post_date.split('T')[0]}</div>
                        <div className="preview">{that.createPreview(data.post_content)}</div>
                        <a href={url} target="_blank"><span>Read More</span></a>
                    </div>
                </div>
            )
        })
        return (
            <section>{articleList}</section>
        )
    }
}

App.propTypes = {
    id: React.PropTypes.number,
    post_author: React.PropTypes.string,
    post_date: React.PropTypes.string,
    post_content: React.PropTypes.string,
    post_title: React.PropTypes.string,
    post_status: React.PropTypes.string,
    post_name: React.PropTypes.string,
    post_type: React.PropTypes.string,
    tips: React.PropTypes.number,
    header_image: React.PropTypes.string
}

App.defaultProps = {
    id: 12345,
    post_author: "Steven B. Jones",
    post_date: "2017-06-11T01:00:24.000Z",
    post_content: "<img class=\"aligncenter size-full wp-image-94697\" src=\"https://www.cybrary.it/wp-content/uploads/2017/06/server_room.jpg\" alt=\"\" width=\"1000\" height=\"665\" />\r\n\r\nThe CEH exam carries a lot of hype, as people are determined to become ethical hackers and want a signifier of their skills. While the CEH is ideal for that, you will want to have prior security knowledge before jumping right into the exam. If you have some security knowledge already and need a way to gauge your skills before the exam, a CEH practice exam can help you in deciding if this is the right exam for you to pursue at the moment.\r\n<h3><strong>Confidence is Key</strong></h3>\r\n<blockquote>I passed my test earlier this morning. I'm a front-end web developer. I've been doing work as a Govt. contractor for about 7 or 8 years now. I don't have much security background aside from getting my Security+ cert in 2013 for no real reason other than it interested me and would my resume. I took the latest version of Sec+ earlier this year to renew it, and I started my CEH journey because an upcoming contract requires Sec+ and CEH to meet DOD 8570 certification requirements.\r\n\r\nI spent about 3 months preparing at a slower pace, but you could easily do it quicker than that. <em>A lot</em> of the CEH body of knowledge is stuff you'll see with Security+ and other basic certs. It's definitely a good idea to have some sort of foundation, whether through certs or job experience. For example, does ethical hacking use bollards? Not technically. Will you still see questions about stuff like that? Yes.\r\n\r\nI finished the whole thing in about 90 minutes, with 60 to answer all the questions, and 30 to review all my answers, plus the few flagged questions. Overall, I'd say this exam is easier than the latest version of Security+. You could essentially call it Security+ with some questions about specific tools + output, and vulnerabilities, IMO.\r\n\r\nI know the exam can sound intimidating, and it tends to get played up and made larger than it is, but you shouldn't be scared. I recommend browsing Kali's tool list and knowing a lot of those at the basic level. Aside from tools and attack types, you should know your general security principles like defense-in-depth, getting permission before hacking, etc.\r\n<ul>\r\n \t<li>Brendan Zhu, Web Developer</li>\r\n</ul>\r\n</blockquote>\r\nBrendan offers a good overview of what content knowledge is needed to prepare for the test. Perhaps his best piece of advice is not to hype the exam up to bigger than it is, or let fear overwhelm you from being successful. Study at the pace that is right for your specific needs, but don’t procrastinate.\r\n\r\nIf you want to dive further into the type of content you’ll find on the CEH exam, you may want to consider the CEH practice exam.\r\n<h3><strong>What is a Practice Exam?</strong></h3>\r\nWith the CEH practice exam, you gain 6-month access to a world of information that can help you succeed on the exam, including analytics on your strengths and weaknesses.  This Practice Exam has a few options available to enhance your learning experience:\r\n<ol>\r\n \t<li>Customize your testing experience by configuring your practice test to suit your specific study needs. Select items by test objective, set study preferences and control how your answers are accessed.</li>\r\n \t<li>Select preset tests. These tests are made to provide a testing experience similar to a real testing environment. They are timed and filter questions like the certification exam. This option will help you determine your readiness for the certification exam.</li>\r\n \t<li>Flashcard review allows you to review concepts in a self-graded and unlimited environment. With hundreds of questions, these premade flashcards will help you understand concepts covered on the actual certification exam.</li>\r\n</ol>\r\n<h3><strong>How Will it Help Me Pass?</strong></h3>\r\nIf used correctly, the practice exam will help you pass because it will ultimately give you a simulated exam in the same format with the same timing as a real exam. Often, we’re not used to taking an exam in this manner, so it helps us feel comfortable that the material, not the environment, is the focus. It all goes back to confidence.\r\n\r\nSimilarly, you get feedback specific to topic areas that need improvement so you can spend time reviewing what you don’t know rather than wasting time going over all the content.\r\n\r\nWe recommend first going through the exam in assessment mode (option 2, as listed above) to see what you know and don’t know going into the exam. Then, use options 1 and 3 to hone in on specific topics that need improvement. Lastly, go through option 2 as many times as needed until you feel comfortable going into the real test.\r\n<h3><strong>Transcender CEH Practice Exam Reviews</strong></h3>\r\n<blockquote>I found the Transcender Exams to be fantastic! The questions were more intense than the actual Ethical Hacker exam, and I felt were a tremendous learning tool. It has become a common practice for the training staff at our company to recommend your products. Thanks!\r\n<ul>\r\n \t<li>R.R.</li>\r\n</ul>\r\nI took the exam this weekend and passed and I simply would not have without the Transcender practice material. I used the Transcender CEH practice study material most for the areas that I was the weakest. I actually ended up scoring better on those sections than those I have always done well on. I felt that the Transcender material covered the concepts and details necessary to properly face this tough exam.\r\n<ul>\r\n \t<li>T.W.</li>\r\n</ul>\r\n</blockquote>\r\n<em>*Note: These are real testimonials taken from the Transcender website. For more information, please visit their page. </em>\r\n\r\n<strong>Where Can I Get Mine?</strong>\r\n\r\nThe <a href=\"https://www.cybrary.it/catalog/transcender_tests/eccert-certified-ethical-hacker-ceh\">CEH practice exam</a> is available in the new Cybrary marketplace. You can find additional study materials for these exams and a variety of others there as well.\r\n\r\n<strong>Looking for More Product Reviews? </strong>\r\n\r\nComment below with your request for future posts.\r\n<div class=\"postArticle-content js-postField js-notesSource js-trackedPost\" data-post-id=\"6c363e797fff\" data-source=\"post_page\" data-collection-id=\"33024b0003d8\" data-tracking-context=\"postPage\" data-scroll=\"native\"><section class=\"section section--body section--first section--last\">\r\n<div class=\"section-content\">\r\n<div class=\"section-inner sectionLayout--insetColumn\">\r\n<figure id=\"97fb\" class=\"graf graf--figure graf--layoutOutsetLeft graf-after--p\" data-scroll=\"native\">\r\n<div class=\"aspectRatioPlaceholder is-locked\">\r\n<div class=\"progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded\" data-image-id=\"0*TJdKYCTCfie03veg.png\" data-width=\"235\" data-height=\"300\" data-scroll=\"native\"><img class=\"progressiveMedia-image js-progressiveMedia-image alignleft\" src=\"https://cdn-images-1.medium.com/max/600/0*TJdKYCTCfie03veg.png\" width=\"180\" height=\"230\" data-src=\"https://cdn-images-1.medium.com/max/600/0*TJdKYCTCfie03veg.png\" /><strong class=\"markup--strong markup--p-strong\"><a class=\"markup--anchor markup--p-anchor\" href=\"https://www.cybrary.it/members/olynch/\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" data-href=\"https://www.cybrary.it/members/olynch/\">Olivia Lynch</a> </strong><strong class=\"markup--strong markup--p-strong\">(@Cybrary_Olivia) </strong>is the Marketing Manager at Cybrary. Like many of you, she is just getting her toes wet in the field of cyber security. A firm believer that the pen is mightier than the sword, Olivia considers corny puns and an honest voice essential to any worthwhile blog.</div>\r\n</div></figure>\r\n</div>\r\n</div>\r\n</section></div>\r\n<h3></h3>",
    post_title: "How to Pass: CEH Practice Exam",
    post_status: "publish",
    post_name: "ceh-practice-exam",
    post_type: "msc",
    tips: 0,
    header_image: "https://www.cybrary.it/wp-content/uploads/2017/06/server_room.jpg"
}

export default App