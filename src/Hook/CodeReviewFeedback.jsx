import React from "react";

function CodeReviewFeedback() {
  return <div></div>;
}

export default CodeReviewFeedback;

const FeedbackSystem = () => {
  const [upvote, setUpvote] = useState(0);
  const [downvote, setDownvote] = useState(0);

  const changeUpVote = () => {
    setUpvote((prevUpvote) => prevUpvote + 1);
  };

  const changeDownVote = () => {
    setDownvote((prevDownvote) => prevDownvote + 1);
  };

  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        <div className="pa-10 w-300 card">
          <h2>Readability</h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button
              className="py-10 px-15"
              data-testid="upvote-btn-0"
              onClick={changeUpVote}
            >
              👍 Upvote
            </button>
            <button className="py-10 px-15 danger" data-testid="downvote-btn-0">
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid="upvote-count-0">
            Upvotes: <strong>{0}</strong>
          </p>
          <p className="my-10 mx-0" data-testid="downvote-count-0">
            Downvotes: <strong>{0}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
