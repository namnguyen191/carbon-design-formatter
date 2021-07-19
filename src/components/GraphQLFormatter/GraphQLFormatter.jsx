import React from 'react';
import { Resizable } from 're-resizable';
import CodeEditor from '../CodeEditor';
import { useState } from 'react';
import { graphQLToString, stringToGraphQL } from '../../utils/formatter';

const GraphQLFormatter = () => {
  const [str, setStr] = useState('');
  const [graphql, setGraphql] = useState('');
  const [curFocus, setCurFocus] = useState();

  const convertOnClick = () => {
    if (curFocus === 'str') {
      let formattedGraphQL;
      try {
        formattedGraphQL = stringToGraphQL(str);
      } catch (err) {
        setGraphql('Syntax Error!');
        return;
      }

      setGraphql(formattedGraphQL);
    } else if (curFocus === 'graphql') {
      let formattedStr;
      try {
        formattedStr = graphQLToString(graphql);
      } catch (err) {
        setStr('Syntax Error!');
        return;
      }
      setStr(formattedStr);
    } else {
      console.log('Fail to track focus: ', curFocus);
    }
  };

  const onChange = (value) => {
    setCurFocus('graphql');
    setGraphql(value);
  };

  return (
    <div className="graphql-formatter-container">
      <Resizable
        defaultSize={{
          width: 400,
          height: 400
        }}
        onClick={() => setCurFocus('graphql')}
      >
        <CodeEditor
          language="graphql"
          initialValue={graphql}
          onChange={onChange}
        />
      </Resizable>
      <img
        src={process.env.PUBLIC_URL + '/221-arrow-10.gif'}
        alt="Convert Button"
        onClick={() => {
          convertOnClick();
        }}
      />
      <Resizable
        defaultSize={{
          width: 400,
          height: 400
        }}
        onClick={() => setCurFocus('str')}
      >
        <textarea
          className="transformed-text"
          value={str}
          onChange={(event) => {
            setStr(event.target.value);
            setCurFocus('str');
          }}
          spellCheck={false}
        ></textarea>
      </Resizable>
    </div>
  );
};

export default GraphQLFormatter;
