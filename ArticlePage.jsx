import React from 'react';
import ReactDOM from 'react-dom';
import data from './articles.json';



class ArticlePages extends React.Component {
    'use strict';

    createPreviewMarkup(content) {
        var preview = content.replace(/<img[^>]*>/, "");
        return {__html: preview};
    }

    createPreview(content) {
        return <div>dangerouslySetInnerHTML={this.createPreviewMarkup(content)}></div>

    }

    render() {
        let header_img = this.props.header_image;
        let title = this.props.post_title;
        let date_published = this.props.post_date.split('T', ' ');
        let preview = this.createPreview(this.props.post_content);
        let url = './' + this.props.post_name;
        return (
            <div className="articlePreview">
                <div className="headerImageContainer">
                    <img className="headerImage" src={header_img}/>
                </div>
                <div className="articleInfo">
                    <h1>{title}</h1>
                    <div className="publishDate">{date_published}</div>
                    <div className="preview">{preview}</div>
                    <Route path={url} component={articlePage} /><span>Read More</span>
                </div>
            </div>
        )

    }
}

export default ArticlePages