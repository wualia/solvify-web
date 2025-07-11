import { Skeleton } from "../ui/skeleton";

const BlogPostsSkeleton = () => {
  return (
    <div className="space-y-4">
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <div className="border-b last-of-type:border-b-0 py-4">
            <div>
              <div className="pb-4">
                <Skeleton className="h-6 w-56" />
              </div>
              <div className="pb-4">
                <Skeleton className="h-12 w-3/4" />
              </div>
              <div className="pb-4">
                <Skeleton className="h-12 w-4/5" />
              </div>
            </div>
            <div className="pb-6">
              <Skeleton className="h-6 w-28" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default BlogPostsSkeleton;
