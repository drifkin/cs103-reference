var utils = require('../utils.js');
var Definition = React.createClass({
    render: function() {
        var lectureString = utils.stringifyLecture(this.props.lecture);
        return (
            <div style={{
                marginBottom: 48
            }}>
                <dt id={this.props.name} style={{
                    fontFamily: "'Bitter', serif",
                    fontWeight: 'bold',
                    fontSize: 20,
                    paddingBottom: 0
                }}>
                    {this.props.name}
                </dt>
                <dd style={{
                    lineHeight: '24px'
                }}>
                    {
                        this.props.paragraphs.map(function(paragraph, i) {
                            return <p key={i} dangerouslySetInnerHTML={{__html: paragraph}}></p>;
                        })
                    }
                    <p className="source" style={{
                        textAlign: 'right'
                    }}>
                        <span style={{ fontStyle: 'italic' }}>Source: </span>
                        <a href={"http://web.stanford.edu/class/cs103/lectures/" + lectureString + "/Small" + lectureString + ".pdf#page=" + this.props.slide}>
                            Lecture {lectureString}, Slide {this.props.slide}
                        </a>
                    </p>
                </dd>
            </div>
        );
    }
});

module.exports = Definition;
