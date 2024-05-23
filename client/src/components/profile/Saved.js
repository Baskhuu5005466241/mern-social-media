import React, { useState, useEffect } from "react";
import PostThumb from "../PostThumb";
import LoadIcon from "../../images/loading.gif";
import LoadMoreBtn from "../LoadMoreBtn";
import { getDataAPI } from "../../utils/fetchData";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";

const Saved = ({ auth, dispatch }) => {
  const [savePosts, setSavePosts] = useState([]);
  const [result, setResult] = useState(9);
  const [page, setPage] = useState(2);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    getDataAPI(`getSavePosts`, auth.token)
    .then(res => { 
        setSavePosts(res.data.savePosts) 
        setResult(res.data.result)
        setLoad(false)
    })  
    .catch(err => {
        if (err.response && err.response.data && err.response.data.msg) {
            // Handle error response from the API
            dispatch({type: GLOBALTYPES.ALERT, payload: {error: err.response.data.msg}})
        } else {
            // Handle unexpected error
            console.error("Unhandled error:", err);
            // You might want to dispatch a generic error message or log the error for debugging
        }
        setLoad(false); // Ensure load state is set to false even in case of error
    });

    // Cleanup function
    return () => setSavePosts([]);
}, [dispatch, auth.token]);


  const handleLoadMore = async () => {
    setLoad(true);
    const res = await getDataAPI(`getSavePosts?limit=${page * 9}`, auth.token);
    setSavePosts(res.data.savePosts);
    setResult(res.data.result);
    setPage(page + 1);
    setLoad(false);
  };


  return (
    <div>
      <PostThumb posts={savePosts} result={result} />

      {load && (
        <img src={LoadIcon} alt="Loading..." className="d-block mx-auto" />
      )}

      <LoadMoreBtn
        result={result}
        page={page}
        load={load}
        handleLoadMore={handleLoadMore}
      />
    </div>
  );
};

export default Saved;
