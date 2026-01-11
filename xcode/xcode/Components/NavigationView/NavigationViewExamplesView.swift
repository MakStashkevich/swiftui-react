
import SwiftUI

struct NavigationViewExamplesView: View {
    var body: some View {
        NavigationView {
            List {
                NavigationLink("Go to Detail 1", destination: Text("Detail View 1"))
                NavigationLink("Go to Detail 2", destination: Text("Detail View 2"))
            }
            .navigationTitle("NavigationView Examples")
        }
    }
}

struct NavigationViewExamplesView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationViewExamplesView()
    }
}
