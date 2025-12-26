import { useState } from "react";
import { X } from "lucide-react";

const TagInput = ({ tags, setTags }) => {
    const [inputValue, setInputValue] = useState("");

    const addTag = (value) => {
        const newTag = value.trim();

        if (!newTag) return;
        if (tags.includes(newTag)) return;

        setTags([...tags, newTag]);
    };

    const handleChange = (e) => {
        const value = e.target.value;

        if (value.includes(",")) {
            const tag = value.replace(",", "");
            addTag(tag);
            setInputValue("");
        } else {
            setInputValue(value);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addTag(inputValue);
            setInputValue("");
        }

        if (e.key === "Backspace" && !inputValue && tags.length) {
            setTags(tags.slice(0, -1));
        }
    };

    const removeTag = (index) => {
        setTags(tags.filter((_, i) => i !== index));
    };

    return (
        <div className="w-full">
            <div className="flex flex-wrap items-center gap-2  ">

                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="flex items-center gap-1 px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                    >
                        #{tag}
                        <button
                            type="button"
                            onClick={() => removeTag(index)}
                            className="hover:text-error"
                        >
                            <X size={14} />
                        </button>
                    </span>
                ))}

                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter tags separated by commas"
                    className="input input-bordered w-full focus:input-primary"
                />
            </div>
        </div>
    );
};

export default TagInput;
