import { useState } from "react";

const EditProfileForm = () => {
    const initialUser = {
        name: "Afra Anjum",
        username: "@afra_dev",
        bio: "Full-stack Developer | UI/UX Enthusiast | Writing about the future of AI and Web Tech.",
        location: "Dhaka, Bangladesh",
        joined: "January 2024",
        stats: { posts: 12, followers: "1.2k", following: 450 },
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Afra"
    };

    const [user, setUser] = useState(initialUser);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Profile updated successfully!");
    };

    return (
        <div className="max-w-xl mx-auto bg-base-100 p-6 my-10 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>

            <form onSubmit={handleSubmit} className="space-y-4">

                {/* Avatar */}
                <div className="flex items-center gap-4">
                    <img src={user.avatar} alt="Avatar" className="w-16 h-16 rounded-full" />
                    <input
                        type="text"
                        name="avatar"
                        value={user.avatar}
                        onChange={handleChange}
                        placeholder="Avatar URL"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Name */}
                <div>
                    <label className="label">
                        <span className="label-text font-semibold">Name</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Username */}
                <div>
                    <label className="label">
                        <span className="label-text font-semibold">Username</span>
                    </label>
                    <input
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Bio */}
                <div>
                    <label className="label">
                        <span className="label-text font-semibold">Bio</span>
                    </label>
                    <textarea
                        name="bio"
                        value={user.bio}
                        onChange={handleChange}
                        className="textarea textarea-bordered w-full"
                        rows={3}
                    ></textarea>
                </div>

                {/* Location */}
                <div>
                    <label className="label">
                        <span className="label-text font-semibold">Location</span>
                    </label>
                    <input
                        type="text"
                        name="location"
                        value={user.location}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Stats (readonly) */}
                <div className="flex gap-4 text-sm text-base-content/60">
                    <p>Posts: {user.stats.posts}</p>
                    <p>Followers: {user.stats.followers}</p>
                    <p>Following: {user.stats.following}</p>
                    <p>Joined: {user.joined}</p>
                </div>

                {/* Submit */}
                <button type="submit" className="btn btn-primary w-full mt-4">
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default EditProfileForm;
