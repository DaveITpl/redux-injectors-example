type Props = {
  isLoading: boolean;
  children?: any;
};

export const Loader = ({ isLoading, children }: Props) => {
  return isLoading ? (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      Loading...
    </div>
  ) : (
    children
  );
};
