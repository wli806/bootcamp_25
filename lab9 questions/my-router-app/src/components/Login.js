import {Link, useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const showArticle = () => {
        navigate('/article?id=2&title=abc');
    }

    const showList = () => {
        navigate('/list/123'); // 传递参数 123 会是一个字符串 list的名字
    }

    return (
        <div>
            <div>我是login组件</div>
            <Link to='/article?id=1&title=abc'>文章</Link>
            <button onClick={showArticle}>跳转到article</button>
            <button onClick={showList}>跳转到list</button>
        </div>
    )
}

export default Login