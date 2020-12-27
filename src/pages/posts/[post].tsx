import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import mapStateToProps from "../../store/mapStateToProps";
import Layout from "../../basic/components/Layout";
import Loading from "../../basic/components/Loading";
import Error from "../../basic/components/Error";
import mapDispatchToProps from "../../store/mapDispatchToProps";

type DataType = {
    data?: {
        title: string;
        body: string;
    };
};

type PostTypes = {
    postData: DataType;
    loadPostData: (arg0: string | string[] | undefined) => {};
    loading: boolean;
    error: boolean;
};

const Post = ({ postData, loading, error, loadPostData }: PostTypes) => {
    const { query } = useRouter()
    useEffect(() => {
        loadPostData(query.post);
    }, [])
    const requestedData = postData ? postData.data : { title: "", body: "" };
    return (
        <Layout>
            <div className="post-self">
                <div className="add-new-back-box">
                    <Link href="/">
                        <span className="add-new-back">
                            <FontAwesomeIcon
                                icon={faArrowLeft}
                                className="add-new-back-icon"
                            />
                            Back to home
                        </span>
                    </Link>
                </div>
                <div className="post-self-content">
                    {!loading && <Loading />}
                    {error && loading && <Error />}
                    {postData && requestedData && (
                        <>
                            <h3 className="post-self-title">
                                {requestedData.title}
                            </h3>
                            <p className="post-self-description">
                                {requestedData.body}
                            </p>
                        </>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default connect(
    mapStateToProps("POST"),
    mapDispatchToProps("POST")
)(Post);
