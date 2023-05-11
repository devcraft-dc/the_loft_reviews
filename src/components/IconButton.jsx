import classNames from 'classnames';

export const IconButton = ({ icon, title, isActive, ...props }) => {
  const styles = classNames('text-sm max-md:text-xs max-sm:text-[0.65rem]', {
    'after:content-[""] after:block after:absolute after:bottom-[-3px] after:w-full after:h-[3px] after:bg-secondary-white':
      isActive,
  });

  return (
    <button className={classNames({ relative: isActive })} {...props}>
      <img
        className="w-8 mx-auto max-md:w-7 max-sm:w-6"
        src={icon}
        alt={title ? title : 'icon'}
      />
      {title !== '' && <span className={styles}>{title}</span>}
    </button>
  );
};
