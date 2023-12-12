import UIKit
import WebKit
import UserNotifications

class ViewController: UIViewController, WKNavigationDelegate {
    var webView: WKWebView!

    override func loadView() {
        webView = WKWebView()
        webView.navigationDelegate = self
        view = webView
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        
        if let url = URL(string: "https://aliclonsdale.me/Interactive-Quiz-Website-/") {
            let request = URLRequest(url: url)
            webView.load(request)
        }

        requestNotificationPermission()
    }

    func requestNotificationPermission() {
        UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .sound, .badge]) { [weak self] (granted, error) in
            if granted {
                print("Notification permission granted")
                self?.scheduleRepeatingNotification(interval: 60)
            } else {
                print("Notification permission denied")
            }
        }
    }

    func scheduleRepeatingNotification(interval: TimeInterval) {
        let content = UNMutableNotificationContent()
        content.title = "Remember To Study!"
        content.body = "Hop back on to BEAT your highscore!"
        content.sound = UNNotificationSound.default

        let trigger = UNTimeIntervalNotificationTrigger(timeInterval: interval, repeats: true)

        let request = UNNotificationRequest(identifier: UUID().uuidString, content: content, trigger: trigger)

        UNUserNotificationCenter.current().add(request) { (error) in
            if let error = error {
                print("Error scheduling notification: \(error.localizedDescription)")
            } else {
                print("Hop back on to BEAT your highscore!")
            }
        }
    }

    // WKNavigationDelegate methods if needed
}
