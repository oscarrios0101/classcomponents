import React from 'react';

class WorkflowExplanation extends React.Component {
  render() {
    return (
      <div className="workflow-explanation">
        <h2>React Class Component Workflow</h2>
        <ol>
          <li>
            <strong>Constructor:</strong> Called when the component is created.
            Initialize state here using{' '}
            <code>this.state = &#123; ... &#125;</code>. Bind event handlers (if
            not using arrow functions).
          </li>
          <li>
            <strong>render():</strong> The only required method. Returns the JSX
            that defines the output. Called initially and when state changes or
            parent re-renders with new props.
          </li>
          <li>
            <strong>Component Did Mount:</strong> Called after the component is
            rendered to the DOM. Use for side effects (API calls,
            subscriptions).
          </li>
          <li>
            <strong>Updates:</strong> When state changes or the parent
            re-renders with new props, React re-renders this component. React
            performs a shallow comparison of props to determine if a re-render
            is necessary.
          </li>
          <li>
            <strong>Component Will Unmount:</strong> Called just before the
            component is removed from the DOM. Clean up resources created in
            `componentDidMount()`.
          </li>
        </ol>
        <p>
          Functional components with hooks are generally preferred for new code.
          Understanding the class component workflow is valuable for working
          with older codebases and for understanding React's underlying
          concepts.
        </p>
      </div>
    );
  }
}

export default WorkflowExplanation;
