import {useSearchParams} from 'react-router-dom'

const Article = () => {
    const [params] = useSearchParams();
    let id = params.get("id");
    let title = params.get('title');
    return (
        <div>我是article组件.id={id}, title={title}</div>
    )
}

export default Article;
