//
//  ViewController.swift
//  j
//
//  Created by Alic Lonsdale on 8/11/2023.
//

import UIKit
import WebKit

class ViewController: UIViewController {
    @IBOutlet var webView: WKWebView! // the app view in the storyboard

    override func viewDidLoad() {
        super.viewDidLoad()

        if let url = URL(string: "https://google.com") { // Replace w/ the final URL of website
            let request = URLRequest(url: url)
            webView.load(request)
        }
    }
}
