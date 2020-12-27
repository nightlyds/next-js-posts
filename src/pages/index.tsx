import React, { useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import mapDispatchToProps from "../store/mapDispatchToProps";
import mapStateToProps from "../store/mapStateToProps";
import Layout from "../basic/components/Layout";
import Loading from "../basic/components/Loading";
import Error from "../basic/components/Error";

type PostType = {
    title: string;
    id: number;
    body: string;
};

type DataType = {
    data?: Object;
};

type PostsTypes = {
    data: DataType;
    loading: boolean;
    error: boolean;
    loadUp: () => {};
};

const Posts = ({ data, loading, error, loadUp }: PostsTypes) => {
    const requestedData = data ? data.data : [{ title: "", id: 0, body: "" }];
    useEffect(() => {
        loadUp();
    }, []);

    const openPost = (
        event: React.MouseEvent<HTMLDivElement>,
        id: number
    ): void => {
        Router.push(`/posts/${id}`);
    };
    return (
        <Layout>
            <div className="posts">
                <div className="posts-add-new-box">
                    <Link href="/add_new">
                        <span className="posts-add-new">
                            Add new
                            <FontAwesomeIcon
                                icon={faPlus}
                                className="posts-add-new-icon"
                            />
                        </span>
                    </Link>
                </div>
                <div className="posts-content">
                    {!loading && <Loading />}
                    {error && loading && <Error />}
                    {data &&
                        loading &&
                        requestedData &&
                        requestedData.map((post: PostType, index: number) => (
                            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                            <div
                                className="post"
                                key={`${index}_${post}`}
                                onClick={e => openPost(e, post.id)}
                                onKeyUp={e => openPost(e, post.id)}
                            >
                                <h3 className="post-title">{post.title}</h3>
                                <p className="post-description">
                                    {post.body.length >= 200
                                        ? `${post.body.slice(0, 400)}...`
                                        : post.body}
                                </p>
                            </div>
                        ))}
                </div>
            </div>
        </Layout>
    );
};

export default connect(
    mapStateToProps("POSTS"),
    mapDispatchToProps("POSTS")
)(Posts);
