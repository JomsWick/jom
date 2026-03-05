const SocialIcon = ({ href, label, Icon }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex flex-col items-center"
        >
            <span
                className="absolute -top-7 text-xs px-2 py-1 rounded
                bg-gray-900 text-white
                dark:bg-gray-100 dark:text-gray-900
                opacity-0 group-hover:opacity-100
                transition duration-200"
            >
                {label}
            </span>

            <Icon className="text-2xl text-teal-500 transition-transform duration-200 group-hover:scale-125" />
        </a>
    );
};

export default SocialIcon;