import ContentLoader from "react-content-loader"

const Loader: React.FC = () => (
  <ContentLoader 
    speed={2}
    width={245}
    height={273}
    viewBox="0 0 245 273"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="400" y="60" rx="0" ry="0" width="180" height="60" /> 
    <rect x="400" y="155" rx="0" ry="0" width="180" height="200" /> 
    <rect x="400" y="390" rx="30" ry="30" width="200" height="60" /> 
    <circle cx="124" cy="72" r="70" /> 
    <rect x="106" y="174" rx="0" ry="0" width="1" height="9" /> 
    <rect x="44" y="154" rx="0" ry="0" width="171" height="24" /> 
    <rect x="128" y="173" rx="0" ry="0" width="8" height="7" /> 
    <rect x="34" y="191" rx="0" ry="0" width="190" height="14" /> 
    <rect x="70" y="214" rx="0" ry="0" width="125" height="48" /> 
    <rect x="125" y="178" rx="0" ry="0" width="0" height="3" />
  </ContentLoader>
)

export default Loader
