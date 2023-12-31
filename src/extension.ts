// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import open from "open";

export function activate(context: vscode.ExtensionContext) {
    /**
     * Main command
     * 
     * This command shows in the command palette.
     */
    let openWithSystemDisposable =
        vscode.commands.registerCommand('system-viewer.openInSystemViewer', async () => {
            if (vscode.window.activeTextEditor) {
                await open(vscode.window.activeTextEditor.document.fileName);
            }
        });

    context.subscriptions.push(openWithSystemDisposable);
    context.subscriptions.push(
        /**
         * This command is used in the navigator
         * It is also hidden from the command palette
         */
        vscode.commands.registerCommand(
            'system-viewer.openFileInNavigator', async (uri: vscode.Uri) => await open(uri.fsPath)
        )
    );
}

export function deactivate() { }
