"use client";

import { useState } from "react";

export default function LikeButton() {
    const [liked, setLiked] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);
    const [pop, setPop] = useState<boolean>(false);

    function handleClick() {
        if (liked) {
            setCount(Math.max(0, count - 1));
            setLiked(false);
        } else {
            setCount(count + 1);
            setLiked(true);
            setPop(true);
            setTimeout(() => setPop(false), 250);
        }
    }

    return (
        <div className="like-widget">
            <button
                className={`like-btn ${liked ? "liked" : ""} ${pop ? "like-pop" : ""}`}
                type="button"
                aria-label="Suka menu ini"
                onClick={handleClick}>
                <span className="like-icon">&#9825;</span>
            </button>
            <span className="like-count">{count}</span>
        </div>
    );
}
