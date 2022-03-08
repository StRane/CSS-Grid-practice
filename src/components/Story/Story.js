import styles from "./Story.module.scss";

const Story = () => {
  return (
    <>
      <div className={styles.pictures}>Story pictures</div>
      <div className={styles.content}>Story content</div>
    </>
  );
};

export default Story;
