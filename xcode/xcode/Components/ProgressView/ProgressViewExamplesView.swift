
import SwiftUI

struct ProgressViewExamplesView: View {
    @State private var progress = 0.5

    var body: some View {
        List {
            ProgressView()
            ProgressView("Loading...", value: progress, total: 1.0)
            ProgressView {
                Text("Custom Loading")
            }
        }
        .navigationTitle("ProgressView Examples")
    }
}

struct ProgressViewExamplesView_Previews: PreviewProvider {
    static var previews: some View {
        ProgressViewExamplesView()
    }
}
