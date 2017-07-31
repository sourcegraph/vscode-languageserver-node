# Sourcegraph modifications

This fork depends on changes we have made to vscode.d.ts in https://github.com/sourcegraph/vscode-private

To develop this locally make sure that the paths in `src/refs.d.ts` resolve to your local checkout of https://github.com/sourcegraph/vscode-private.
The checked in paths assume that you have checked out https://github.com/sourcegraph/vscode-private in the same directory as https://github.com/sourcegraph/vscode-languageserver-node.
