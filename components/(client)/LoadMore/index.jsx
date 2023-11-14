"use client";
import { fetchPosts } from "@/app/actions/fetchPosts";
import { ContentIndex } from "@/components/(server)/Content";
import { Spinner } from "@/components/(server)/Spinner";
import { useToast } from "@/components/ui/use-toast";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const LoadMore = () => {
  const [posts, setPosts] = useState([]);
  const { toast } = useToast();
  const [pagesLoaded, setPagesLoaded] = useState(0);
  const [allPostsLoaded, setAllPostsLoaded] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [show, setShow] = useState(false);

  const loadMorePosts = useCallback(async () => {
    const nextPage = pagesLoaded + 1;
    try {
      const newPosts = (await fetchPosts({ page: nextPage })) ?? [];
      if (newPosts.data.length === 0) {
        setAllPostsLoaded(true);
        return;
      }
      setPosts((prev) => [...prev, ...newPosts.data]);
      setPagesLoaded(nextPage);
    } catch {
      toast({
        title: "Something went error load more",
      });
    } finally {
      setShow(false);
    }
  }, [pagesLoaded, toast]);

  useEffect(() => {
    if (inView) {
      setShow(true);
      setTimeout(() => {
        loadMorePosts();
      }, 2000);
    }
  }, [inView, loadMorePosts]);

  return (
    <>
      {posts?.map((post) => {
        const {
          title,
          votes,
          subreddit,
          createdAt,
          comments,
          author,
          content,
          id,
        } = post;
        return (
          <ContentIndex
            key={id}
            id={id}
            title={title}
            votes={votes}
            subReddit={subreddit}
            createdAt={createdAt}
            comments={comments}
            author={author}
            content={content}
          />
        );
      })}
      <div className="flex justify-center" ref={ref}>
        {show && !allPostsLoaded && <Spinner />}
      </div>
    </>
  );
};
