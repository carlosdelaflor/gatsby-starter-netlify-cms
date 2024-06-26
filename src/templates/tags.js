import * as React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map((post) => (
      <li key={post.node.fields.slug}>
        <Link className="title has-text-primary is-size-4" to={post.node.fields.slug}>
          {post.node.frontmatter.title}
        </Link>
      </li>
    ));
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} noticia${
      totalCount === 1 ? "" : "s"
    } etiquetada(s) con “${tag}”`;

    return (
      <Layout>
        <div className="main-content-container">
            <section className="section">
              <Helmet title={`${tag} | ${title}`} />
              <div className="container content">
                <div className="columns">
                  <div
                    className="column is-10 is-offset-1"
                    style={{ marginBottom: "6rem" }}
                  >
                    <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
                    <ul >{postLinks}</ul>
                    <p>
                      <Link to="/tags/">Mostrar todas las etiquetas</Link>
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section></section>
          </div>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
