// @flow strict
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';

function BlogCard({ blog }: { blog: any }) {
    return (
        <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group"
        >
            <div className="h-44 lg:h-52 w-full cursor-pointer overflow-hidden rounded-t-lg">
                {/* Using a gradient placeholder since we don't have real images yet */}
                <div className="h-full w-full bg-gradient-to-br from-violet-900 via-slate-900 to-black group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                    <span className="text-4xl">📝</span>
                </div>
            </div>
            <div className="p-2 sm:p-3 flex flex-col">
                <div className="flex justify-between items-center text-[#16f2b3] text-xs lg:text-sm">
                    <p>{blog.published_at}</p>
                    <div className="flex items-center gap-3">
                        <p className="flex items-center gap-1">
                            <BsHeartFill />
                            <span>{Math.floor(Math.random() * 100) + 10}</span>
                        </p>
                        <p className="flex items-center gap-1">
                            <FaCommentAlt />
                            <span>{Math.floor(Math.random() * 20) + 1}</span>
                        </p>
                    </div>
                </div>
                <Link target='_blank' href={blog.url}>
                    <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
                        {blog.title}
                    </p>
                </Link>
                <p className='mb-2 text-sm text-[#16f2b3]'>
                    {blog.reading_time}
                </p>
                <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
                    {blog.description}
                </p>
                {/* <div className="">
          <Link target='_blank' href={blog.url}>
            <button className='bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs'>
              Read More
            </button>
          </Link>
        </div> */}
            </div>
        </div>
    );
};

export default BlogCard;
