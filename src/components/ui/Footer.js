import React from 'react';

const footerStyle = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	textAlign: 'center',
	padding: '0.4rem 2rem',
	backgroundColor: '#333',
	color: '#eee',
	marginTop: '10px'
	// borderRadius: '0.4rem'
	// boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)'
};

const aStyle = {
	border: 'none',
	minHeight: '10px',
	padding: '5px',
	marginRight: '10px',
	color: '#eee'
};

const Footer = () => {
	return (
		<footer style={footerStyle}>
			<p>&copy; Xianbin Zhen 2020</p>
			<div>
				<a
					style={aStyle}
					rel="noopener noreferrer"
					href="https://xianbinzhen.github.io/mypage/index.html"
					target="_blank"
				>
					<i className="fas fa-home " />
				</a>
				<a href="mailto:xianbin.zhen001@umb.edu" style={aStyle}>
					<i className="fas fa-envelope" />
				</a>
				<a
					style={aStyle}
					rel="noopener noreferrer"
					href="https://www.linkedin.com/in/xianbin-zhen-93ba311a1/"
					target="_blank"
				>
					<i className="fab fa-linkedin " />
				</a>
				<a style={aStyle} rel="noopener noreferrer" href="https://github.com/XianbinZhen" target="_blank">
					<i className="fab fa-github" />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
