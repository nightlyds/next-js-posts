import React, { useState } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import mapStateToProps from "../store/mapStateToProps";
import mapDispatchToProps from "../store/mapDispatchToProps";
import Error from "../basic/components/Error";
import Layout from "../basic/components/Layout";

type AddNewTypes = {
    addNew: (arg0: object) => {};
    loading: boolean;
    error: boolean;
};

const AddNew = ({ addNew, loading, error }: AddNewTypes) => {
    const [title, setTitle] = useState<string>("");
    const [bodyText, setBodyText] = useState<string>("");
    const [successMessage, setSuccessMessage] = useState<boolean>(false);
    const isInvalid: boolean = !!(title === "" || bodyText === "");

    const activeSuccessMessage = (): void => {
        setSuccessMessage(true);
        setTimeout(() => {
            setSuccessMessage(false);
        }, 5000);
    };

    const sendForm = (event: React.FormEvent<HTMLFormElement>) => {
        addNew({
            title,
            body: bodyText,
        });

        activeSuccessMessage();
        event.preventDefault();
    };

    const checkTitleArea = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const {
            target: { value: title },
        } = event;
        if (titleToNumber => 5) {
            setTitle(title);
        }
    };

    const checkBodyTextArea = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ): void => {
        const {
            target: { value: bodyText },
        } = event;
        if (bodyText => 5) {
            setBodyText(bodyText);
        }
    };
    return (
        <Layout>
            <div className="add-new">
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
                <div className="add-new-title-box">
                    <h2 className="add-new-title">Add New Post</h2>
                </div>
                <form className="add-new-form" onSubmit={e => sendForm(e)}>
                    <div className="add-new-form-title-area">
                        <label htmlFor="title" className="add-new-area-label">
                            Title:
                        </label>
                        <input
                            type="text"
                            value={title}
                            id="title"
                            className="add-new-form-title"
                            placeholder="Write a title"
                            onChange={e => checkTitleArea(e)}
                        />
                    </div>
                    <div className="add-new-form-body-area">
                        <label
                            htmlFor="body"
                            className="add-new-area-label add-new-area-label-body"
                        >
                            Body:
                        </label>
                        <textarea
                            className="add-new-form-body"
                            value={bodyText}
                            id="body"
                            placeholder="A body of the text message.."
                            onChange={e => checkBodyTextArea(e)}
                        />
                    </div>
                    <input
                        type="submit"
                        className="add-new-form-send"
                        value="Send!"
                        disabled={isInvalid}
                    />
                </form>
                {error && loading && <Error />}
                {loading && successMessage && (
                    <div className="add-new-success-box">
                        <span className="add-new-success">Post sent!</span>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default connect(
    mapStateToProps("ADD_NEW"),
    mapDispatchToProps("ADD_NEW")
)(AddNew);
