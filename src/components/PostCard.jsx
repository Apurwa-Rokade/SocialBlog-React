import React from 'react';
import appwriteService from '../appwrite/config';
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
    // Ensure featuredImage is a valid fileId before calling getFilePreview
    const filePreview = featuredImage ? appwriteService.getFilePreview(featuredImage) : null;

    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    {filePreview && (
                        <img src={filePreview} alt={title} className='rounded-xl' />
                    )}
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard;
